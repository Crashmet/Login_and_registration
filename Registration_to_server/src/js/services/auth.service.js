import axios from 'axios';
import API_ENV from '../config/api.config';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function login(
  email,
  password,
  nickname,
  first_name,
  last_name,
  phone,
  gender_orientation,
  city,
  country,
  date_of_birth_day,
  date_of_birth_month,
  date_of_birth_year
) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/signup`,
      JSON.stringify({
        email,
        password,
        nickname,
        first_name,
        last_name,
        phone,
        gender_orientation,
        city,
        country,
        date_of_birth_day,
        date_of_birth_month,
        date_of_birth_year,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
