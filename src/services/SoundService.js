import * as httpRequest from '~/util/httpRequest';

export const get = async ({ category, _page, _limit }) => {
    try {
        const res = await httpRequest.get('Sound', {
            params: {
                category: category,
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getAll = async ({ _page, _limit }) => {
    try {
        const res = await httpRequest.get('Sound', {
            params: {
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
