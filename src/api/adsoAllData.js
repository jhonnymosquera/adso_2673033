// import { adsoApi, adsoApi2, adsoApiLocal } from "@/api";
import adsoUrlApis from '@/api/adsoUrlApis';
import { getAdsoInfo } from './getAdsoInfo';

export const getAllData = async () => {
	let data = await getAdsoInfo(adsoUrlApis.apiAdso);

		data ??= await getAdsoInfo(adsoUrlApis.apiAdso2);

	data ??= await getAdsoInfo(adsoUrlApis.apiAdsoLocal);

	return data;
};
2;
