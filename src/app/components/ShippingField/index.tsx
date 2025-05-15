import { fetchCep } from "@/app/api/fetchCep";
import { zipCodeMask } from "@/app/utils/zip-code-replace";
import { useState, useEffect } from "react";

export default function ShippingField() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = zipCodeMask(e.target.value);
    setCep(formatted);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      if (cep.length !== 9) return;

      const data = await fetchCep(cep);

      if (!data) {
        setAddress("");
        setError(true);
      } else {
        const fullAddress = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
        setAddress(fullAddress);
        setError(false);
      }
    };

    fetchAddress();
  }, [cep]);

  return (
    <div className="mt-6">
      <label htmlFor="cep" className="block text-sm font-medium text-zinc-700 mb-1">
        Disponibilidade de Entrega
      </label>

      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        placeholder="Digite seu CEP"
        className={`w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 ${
          error ? "border-red-500 text-red-900" : "border-gray-300 text-zinc-900"
        }`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "cep-error" : "cep-success"}
      />

      {address && (
        <p id="cep-success" className="mt-2 text-sm text-green-700">
          Entrega para: {address}
        </p>
      )}

      {error && (
        <p id="cep-error" className="mt-2 text-sm text-red-600">
          Erro ao buscar CEP
        </p>
      )}
    </div>
  );
}
