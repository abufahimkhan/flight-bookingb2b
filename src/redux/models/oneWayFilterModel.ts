export const oneWayFilterModel = {
    stops: {
        value: [],
        toggleStops: (state: any, payload: any) => {
            if (state.value.includes(payload)) {
                state.value = state.value.filter((stop: any) => stop !== payload);
            } else {
                state.value.push(payload);
            }
        },
    },
    airlines: {
        value: [],
        toggleAirline: (state: any, payload: any) => {
            if (state.value.includes(payload)) {
                state.value = state.value.filter((airline: any) => airline !== payload);
            } else {
                state.value.push(payload);
            }
        },
    },
};
