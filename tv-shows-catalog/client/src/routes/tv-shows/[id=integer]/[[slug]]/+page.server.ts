//import { API_BASE_URL } from '$env/static/private';
import type { TvShow } from '$lib/types/tv-show.interface';
import { error, type NumericRange } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params: { id } }) => {
	const url = process.env.API_BASE_URL;
	const response = await fetch(`${url}/tv-shows/${id}`);
	if (!response.ok) {
		throw error(response.status as NumericRange<400, 599>, await response.json());
	}
	const tvShow: TvShow = await response.json();

	return {
		tvShow
	};
};
