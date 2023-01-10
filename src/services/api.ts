import axios from 'axios';
import { IUser } from '../interfaces/IUser';

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
})

type getUserResponse = {
    users: IUser[],
    totalCount: number
}

export async function getUsers(currentPage: number): Promise<getUserResponse> {
    const { data, headers } = await api("users", {
        params: {
            page: currentPage
        }
    });

    const totalCount = Number(headers['x-total-count']);

    const users = data.users.map((user: IUser) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }),
    }));

    return {
        users, totalCount
    };
}