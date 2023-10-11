import {createClient} from 'next-sanity';
import {apiVersion, dataset, projectId} from '../env';

const config ={
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: false,
};

export default config;