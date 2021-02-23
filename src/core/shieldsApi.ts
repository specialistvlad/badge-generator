/**
 * Shields.io API module.
 */
import { STYLES } from "@/constants/appearance";
import { SHIELDS_API } from "@/constants/urls";
import { buildUrl } from "./badges";
import { TLogoParams } from "./shieldsApi.d";
import { GenericBadge, GHRepo, PopularityType, StrMap } from "./types.d";

/**
 * Encode separators for use on shields.io API.
 *
 * Covers dashes, underscores and spaces.
 */
export function _encodeSeparators(value: string, spaceToUnderscore: boolean) {
  value = value.replace(/-/g, "--").replace(/_/g, "__");

  if (spaceToUnderscore) {
    value = value.replace(/ /g, "_");
  }

  return value;
}

/**
 * Turn URL-encoded '<' and '>' symbols back into readable characters.
 *
 * These are allowed in shields.io URLs so should not be encoded.
 */
export function _decodeAngleBrackets(value: string) {
  return value.replace(/%3E/g, ">").replace(/%3C/g, "<");
}

/**
 * Encode a value to be safe as a param in a URL.
 *
 * Prepare a value for dash-based shields.io API URL, based on notes on the site.
 */
export function _encodeParam(value: string, spaceToUnderscore = true) {
  value = _encodeSeparators(value, spaceToUnderscore);

  const encoded = encodeURIComponent(value);

  return _decodeAngleBrackets(encoded);
}

/**
 * Create a URL path for the shields.io dash-based API.
 *
 * The API requires MESSAGE-COLOR at the least and also accepts LABEL-MESSAGE-COLOR.
 *
 * This appropriately escapes label and message for you, based on notes on the shields.io website.
 * So you can pass in more readable values.
 */
export function dashShieldPath(badge: GenericBadge) {
  const message = _encodeParam(badge.message);
  let label = badge.label;

  const pieces = [message, badge.color];
  if (label) {
    label = _encodeParam(label);
    pieces.unshift(label);
  }

  return pieces.join("-");
}

/**
 * Generate URL parameters for styling a badge on shields.io API.
 */
export function logoParams(logoAppearance: TLogoParams = {}) {
  const params: StrMap = {};

  if (logoAppearance.isLarge) {
    params.style = STYLES.FOR_THE_BADGE;
  }

  if (logoAppearance.logo) {
    params.logo = logoAppearance.logo;

    if (logoAppearance.logoColor) {
      params.logoColor = logoAppearance.logoColor;
    }
  }

  return params;
}

/** Image URL for param-based static badge. */
export function _staticParamsUrl(badge: GenericBadge, styleParams: StrMap) {
  const params = {
    label: badge.label!,
    message: badge.message,
    color: badge.color,
    ...styleParams,
  };

  return buildUrl(SHIELDS_API.PARAM, params);
}

/** Image URL for a dash-based static badge. */
export function staticDashUrl(badge: GenericBadge, styleParams: StrMap) {
  const imgPath = dashShieldPath(badge),
    imageTarget = `${SHIELDS_API.DASH}/${imgPath}`;

  return buildUrl(imageTarget, styleParams);
}

/** Image URL for a GitHub social counter badge. */
export function ghSocialShieldUrl(type: PopularityType, repo: GHRepo) {
  const path = `${type}/${repo.username}/${repo.repoName}?style=${STYLES.SOCIAL}`;

  return `${SHIELDS_API.GH}/${path}`;
}

/** Image URL for a dynamic Node package.json dependency badge. */
export function nodePkgJsonShieldUrl(repo: GHRepo, pkgName: string) {
  const path = `${repo.username}/${repo.repoName}/${pkgName}`;

  return `${SHIELDS_API.PKG_JSON_DEPENDENCY}/${path}`;
}