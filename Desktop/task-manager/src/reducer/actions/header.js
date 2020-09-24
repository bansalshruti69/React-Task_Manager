//action types

export const NAVIGATE_PAGE = 'NAVIGATE_PAGE';

//other constants

export const USERBOARD = 'USERBOARD';
export const DASHBOARD = 'DASHBOARD';

//action creator

export function navigatePage(page){
    return {
        type: NAVIGATE_PAGE,
        page
    }
}