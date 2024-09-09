'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { TrackType } from "../types/tracks";

type currentTrackContextValue = {
    currentTrack: TrackType|null,
    setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>;
};

const CurrentTrackContext = createContext<currentTrackContextValue|undefined>(undefined);

type currentTrackProviderProps = {
    children: ReactNode;
}

export function CurrentTrackProvider({children}: currentTrackProviderProps) {
    const [currentTrack, setCurrentTrack] = useState<TrackType|null>(null);

    return <CurrentTrackContext.Provider value={{currentTrack, setCurrentTrack}}>
        {children}
    </CurrentTrackContext.Provider>
}

export function useCurrentTrack() {
    const context = useContext(CurrentTrackContext);
    if (context === undefined) {
        throw new Error('context is undefined');
    }
    return context;
}