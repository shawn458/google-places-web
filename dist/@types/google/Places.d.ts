import { IGooglePlacesConfig, GooglePlacesQueryAutocompleteOpts, GooglePlaceAutocompleteResponse, GooglePlaceQueryAutocompleteResponse, GooglePlaceDetailsResponse, GooglePlacesDetailsOpts, GooglePlaceNearbySearchResponse, GooglePlaceTextSearchResponse, GooglePlacesTextSearchOpts, GooglePlacesFindPlaceSearchOpts, GooglePlaceFindPlaceSearchResponse, GooglePlaceBaseResponse, GooglePlacesOptions } from "./types";
export declare class GooglePlaces {
    private _apiKey?;
    private _debug;
    constructor(opts?: IGooglePlacesConfig);
    autocomplete: (opts?: GooglePlacesQueryAutocompleteOpts | undefined) => Promise<GooglePlaceAutocompleteResponse>;
    queryautocomplete: (opts?: GooglePlacesQueryAutocompleteOpts | undefined) => Promise<GooglePlaceQueryAutocompleteResponse>;
    details: (opts?: GooglePlacesDetailsOpts | undefined) => Promise<GooglePlaceDetailsResponse>;
    nearbysearch: (opts?: (import("./types").BaseGooglePlacesNearbySearch & {
        rankby: "DISTANCE";
        radius?: undefined;
    }) | (import("./types").BaseGooglePlacesNearbySearch & {
        rankby?: "PROMINENCE" | undefined;
        radius: number;
    }) | undefined) => Promise<GooglePlaceNearbySearchResponse>;
    textsearch: (opts?: GooglePlacesTextSearchOpts | undefined) => Promise<GooglePlaceTextSearchResponse>;
    findPlaceSearch: (opts?: GooglePlacesFindPlaceSearchOpts | undefined) => Promise<GooglePlaceFindPlaceSearchResponse>;
    radarsearch: (opts?: GooglePlacesOptions) => Promise<GooglePlaceBaseResponse>;
    apiKey: string | undefined;
    debug: boolean;
    private _googleApiRequest;
    private _permitParams;
    private _log;
    private _query;
}
declare const _default: GooglePlaces;
export default _default;
