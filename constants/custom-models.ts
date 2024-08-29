import { GalleryPreviewData } from '@/models/AffirmationCategory';

export interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles? : string;
    containerStyles?: string;
}

export interface GuidedAffirmationsProps{
    title: string;
    previews:GalleryPreviewData[];
}




