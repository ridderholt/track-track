import { guid } from '../common/guidGenerator';

const initialState = {
    previousTracks: [
        {
            id: guid(),
            when: {
                date: new Date(),
                readable: '2019-04-29 11:45'
            },
            retrieves: {
                found: 4,
                total: 6,
            },
            duration: {
                total: 1382,
                readable: '23min 2s',
            }
        },
        {
            id: guid(),
            when: {
                date: new Date(),
                readable: '2019-04-29 11:45'
            },
            retrieves: {
                found: 4,
                total: 6,
            },
            duration: {
                total: 1382,
                readable: '23min 2s',
            }
        },
        {
            id: guid(),
            when: {
                date: new Date(),
                readable: '2019-04-29 11:45'
            },
            retrieves: {
                found: 4,
                total: 6,
            },
            duration: {
                total: 1382,
                readable: '23min 2s',
            }
        }
    ]
}

const historyReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default historyReducer;