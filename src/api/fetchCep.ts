import { CepResponse } from "./response";

export async function fetchCep(cep: string): Promise<CepResponse | null> {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data: CepResponse = await res.json();

    if (data.erro) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}
