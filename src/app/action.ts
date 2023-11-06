'use server'

import { cookies } from 'next/headers'

export async function createCookies(key: string, value: any) {
    cookies().set(key, value)
}

export async function getCookies(key: string) {
    const cookieStore = cookies()
    return cookieStore.get(key)?.value
}

export async function deleteCookies(key: string) {
    cookies().delete(key)
}