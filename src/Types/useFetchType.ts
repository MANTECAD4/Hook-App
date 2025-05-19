import type { PokeAPI } from "./PokeApi"

export type useFetchType = {
        data: (null | PokeAPI),
        isLoading: boolean,
        hasError: boolean,
        error: (null | { code: number,message: string })
}