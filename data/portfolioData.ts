export interface Reel {
    id:string;
    type: "Travel" | "Wedding" | "Short Film" | "Experiments";
    title : string;
    year : string;
    ytUrl : string;
    igUrl : string;
    thumbnailUrl : string;
}

export interface Teaser {
    id:string;
    type: "Short Film" | "Wedding" | "Pre-Wedding";
    title : string;
    year : string;
    ytUrl : string;
    igUrl : string;
    thumbnailUrl : string;
}

export interface TraditionalFilm {
    id:string;
    type:  "Wedding" | "Mehendi" | "Haldi " | "Reception" ;
    title : string;
    year : string;
    ytUrl : string;
    igUrl : string;
    thumbnailUrl : string;
}

export interface Film {
    id:string;
    type: "Wedding" ;
    title : string;
    year : string;
    ytUrl : string;
    igUrl : string;
    thumbnailUrl : string;
}

export interface Experiments {
    id : string,
    type: string,
    title : string,
    year : string,
    ytUrl : string,
    igUrl : string,
    thumbnailUrl : string
}


export interface PortfolioData {
    reels : Reel[];
    teasers : Teaser[];
    traditionalFilms : TraditionalFilm[];
    films : Film[];
    Experiments : Experiments[];
}






export const PortfolioData : PortfolioData = {
    reels : [
        {
            id: "wed-02",
            type: "Wedding",
            title : "Wedding Reel",
            year : "2026",
            ytUrl : "https://youtu.be/2DeaUdMBtKU",
            igUrl : "https://www.instagram.com/p/example1/",
            thumbnailUrl : "https://img.youtube.com/vi/2DeaUdMBtKU/maxresdefault.jpg"
        },
        {
            id: "wed-03",
            type: "Wedding",
            title : "Haldi Reel",
            year : "2026",
            ytUrl : "https://www.youtube.com/shorts/6Qd3QfSXfEE",
            igUrl : "https://www.instagram.com/p/example2/",
            thumbnailUrl : "https://img.youtube.com/vi/6Qd3QfSXfEE/maxresdefault.jpg"
        }
        ,
        {
            id: "tra-01",
            type: "Travel",
            title : "Travel Reel",
            year : "2026",
            ytUrl : "https://www.youtube.com/shorts/aU7gdNo_KUo",
            igUrl : "https://www.instagram.com/p/example3/",
            thumbnailUrl : "https://img.youtube.com/vi/aU7gdNo_KUo/maxresdefault.jpg"
        },
        {
            id: "tra-02",
            type: "Travel",
            title : "Travel Reel",
            year : "2026",
            ytUrl : "https://www.youtube.com/shorts/K8HMEuZgAtM",
            igUrl : "https://www.instagram.com/p/example4/",
            thumbnailUrl : "https://img.youtube.com/vi/K8HMEuZgAtM/maxresdefault.jpg"
        }
    ],

    teasers : [
        {
            id: "teaser-01",
            type: "Pre-Wedding",
            title : "Mathura Pre-Wedding Teaser",
            year : "2026",
            ytUrl : "https://youtu.be/1E6YLh_t5Tk",
            igUrl : "https://www.instagram.com/p/example3/",
            thumbnailUrl : "https://img.youtube.com/vi/1E6YLh_t5Tk/maxresdefault.jpg"
        },
        {
            id: "teaser-02",
            type: "Pre-Wedding",
            title : "Vrindavan Pre-Wedding Teaser",
            year : "2026",
            ytUrl : "https://youtu.be/N7YTy1Gw66k",
            igUrl : "https://www.instagram.com/p/example3/",
            thumbnailUrl : "https://img.youtube.com/vi/N7YTy1Gw66k/maxresdefault.jpg"
        }
    ],

    traditionalFilms : [
        
    ],
    films : [
       
    ]   
    ,
    Experiments : [
        {
            id: "exp-01",
            type: "Experiments",
            title : "Falling",
            year : "2026",
            ytUrl : "https://youtu.be/w07MHSMd2kc",
            igUrl : "https://www.instagram.com/p/example3/",
            thumbnailUrl : "https://img.youtube.com/vi/w07MHSMd2kc/maxresdefault.jpg"
        }
    ]
}