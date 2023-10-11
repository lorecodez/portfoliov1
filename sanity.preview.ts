"use client"

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity/env';

function onPublicAccessOnly(){
    throw new Error('Unable to load preview as you are not logged in');
}

if(!projectId || !dataset ){
    throw new Error('Missing dataset or projectId. Check your .env');
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});