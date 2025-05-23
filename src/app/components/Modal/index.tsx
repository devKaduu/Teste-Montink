import { Button } from "../Button";
import { ModalProps } from "./props";

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Produto não se encontra no estoque.</h2>

            <Button text="Voltar" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
}
