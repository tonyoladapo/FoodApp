import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer roGl9XMy-aDAiJDY2eD_nFPgczO55rYa_SRZU1DGBYuXaLO-qKQvfc2JNrdz9sH9MVuRNIY00FrDFUlohhuvHk_VEIPFe5nqehIDHPGFzgMpk3lrL45InFrVUMolXnYx'
    }
})