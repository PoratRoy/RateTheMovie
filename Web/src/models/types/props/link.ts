export type BackLinkProps = {
    link?: string;
    callback?: () => void;
    toClear?: boolean;
};

export type RoomLinkProps = {
    roomLink: string;
    isDefaultOpen?: boolean;
};

export type MovieListLinkProps = {};

export type SocialLinksProps = {
    roomLink: string;
};
