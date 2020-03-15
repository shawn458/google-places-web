export interface IGooglePlacesConfig {
    apiKey?: string;
    debug: boolean;
}
export interface GooglePlacesOptions {
    [key: string]: any;
}
export interface GooglePlacesDetailsOpts extends GooglePlacesOptions {
    placeid: string;
    language?: string;
    sessiontoken?: string;
    fields?: string;
}
export interface GooglePlacesAutocompleteOpts extends GooglePlacesOptions {
    components?: string;
    input: string;
    offset?: number;
    language?: string;
    location?: string;
    radius?: number;
    sessiontoken?: string;
    strictbounds?: boolean;
    types?: string[];
}
export interface GooglePlacesQueryAutocompleteOpts extends GooglePlacesOptions {
    bounds?: string;
    components?: string;
    input: string;
    location?: string;
    offset?: number;
    radius?: number;
    sessiontoken?: string;
    types?: string[];
}
export interface BaseGooglePlacesNearbySearch extends GooglePlacesOptions {
    bounds?: string;
    keyword?: string;
    location: string;
    maxprice?: number;
    minprice?: number;
    name?: string;
    opennow?: boolean;
    pagetoken?: string;
    type?: string;
    rankby?: 'PROMINENCE' | 'DISTANCE';
}
export declare type GooglePlacesNearbySearchOpts = BaseGooglePlacesNearbySearch & ({
    rankby: 'DISTANCE';
    radius?: undefined;
} | {
    rankby?: 'PROMINENCE';
    radius: number;
});
export interface GooglePlacesTextSearchOpts extends GooglePlacesOptions {
    bounds?: string;
    location?: string;
    maxprice?: number;
    minprice?: number;
    opennow?: boolean;
    query: string;
    radius?: number;
    type?: string;
}
export interface GooglePlacesFindPlaceSearchOpts extends GooglePlacesOptions {
    input: string;
    inputtype: 'textquery' | 'phonenumber';
    language?: string;
    fields?: string;
}
interface BaseGoogleResult {
    [key: string]: any;
}
export interface GooglePlaceLatLng {
    lat: number;
    lng: number;
}
export interface GooglePlaceAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}
export interface GooglePlaceResultPhoto {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
}
export interface GooglePlaceResultOpenHoursPeriod {
    close: {
        day: number;
        time: string;
    };
    open: {
        day: number;
        time: string;
    };
}
export interface GooglePlaceResultReview {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}
export interface GooglePlaceDetailsResult extends BaseGoogleResult {
    address_components: GooglePlaceAddressComponent[];
    adr_address: string;
    formatted_address: string;
    formatted_phone_number: string;
    geometry: {
        location: GooglePlaceLatLng;
        viewport?: {
            northeast: GooglePlaceLatLng;
            southwest: GooglePlaceLatLng;
        };
    };
    icon: string;
    id: string;
    international_phone_number: string;
    name: string;
    opening_hours: {
        open_now: boolean;
        weekday_text?: string[];
        periods?: GooglePlaceResultOpenHoursPeriod[];
    };
    permanently_closed?: true;
    photos: GooglePlaceResultPhoto[];
    place_id: string;
    plus_code?: {
        global_code: string;
        compound_code?: string;
    };
    rating: number;
    reference: string;
    reviews: GooglePlaceResultReview[];
    scope?: string;
    types: string[];
    url?: string;
    user_ratings_total?: number;
    utc_offset: number;
    vicinity?: string;
    website?: string;
}
export interface GooglePlaceAutocompletePrediction extends Pick<GooglePlaceSearchResult, 'id' | 'place_id' | 'reference' | 'types'>, BaseGoogleResult {
    description: string;
    matched_substrings: [{
        length: number;
        offset: number;
    }];
    structured_formatting: {
        main_text: string;
        main_text_matched_substrings: string;
        secondary_text: string;
    };
    terms: [{
        offset: number;
        value: string;
    }];
}
export interface GooglePlaceSearchResult extends Pick<GooglePlaceDetailsResult, 'formatted_address' | 'geometry' | 'name' | 'opening_hours' | 'photos' | 'place_id' | 'plus_code' | 'rating' | 'id' | 'types' | 'scope' | 'user_ratings_total' | 'vicinity' | 'permanently_closed'>, BaseGoogleResult {
    price_level?: number;
    reference?: string;
}
export declare type GooglePlacesStatusCode = 'OK' | 'ZERO_RESULT' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKOWN_ERROR';
export interface GooglePlaceBaseResponse {
    html_attributions?: string[];
    status: GooglePlacesStatusCode;
    error_message?: string;
    debug_log?: {
        line: any[];
    };
}
export interface GooglePlaceSearchResponse extends GooglePlaceBaseResponse {
    candidates: GooglePlaceSearchResult[];
}
export interface GooglePlaceNearbySearchResponse extends GooglePlaceBaseResponse {
    html_attributions?: string[];
    next_page_token?: string;
    results: GooglePlaceSearchResult[];
}
export interface GooglePlaceDetailsResponse extends GooglePlaceBaseResponse {
    result: GooglePlaceDetailsResult;
}
export declare type GooglePlaceTextSearchResult = Pick<GooglePlaceSearchResult, 'formatted_address' | 'geometry' | 'icon' | 'id' | 'name' | 'photos' | 'place_id' | 'reference' | 'types'>;
export interface GooglePlaceTextSearchResponse extends GooglePlaceBaseResponse {
    results: GooglePlaceTextSearchResult[];
}
export declare type GooglePlaceFindPlaceSearchResult = Pick<GooglePlaceDetailsResult, 'formatted_address' | 'name' | 'opening_hours' | 'photos' | 'rating' | 'user_ratings_total' | 'place_id' | 'icon' | 'geometry'>;
export interface GooglePlaceFindPlaceSearchResponse extends GooglePlaceBaseResponse {
    candidates: GooglePlaceFindPlaceSearchResult[];
}
export interface GooglePlaceQueryAutocompleteResponse extends GooglePlaceBaseResponse {
    predictions: GooglePlaceAutocompletePrediction[];
}
export interface GooglePlaceAutocompleteResponse extends GooglePlaceBaseResponse {
    predictions: GooglePlaceAutocompletePrediction[];
}
export {};
