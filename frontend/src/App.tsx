import { useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';

type PixResponse = {
  qr_code_image_base64: string;
  qr_code_copy_paste: string;
  transactionId: number;
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] =
    useState<number | null>(null);
  const [pix, setPix] =
    useState<Partial<PixResponse> | null>(null);

  const handlePix = async () => {
    setLoading(true);
    setPix(null);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/payments/pix`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: 'Pagamento de teste',
          }),
        }
      );
      const {
        qr_code_copy_paste,
        qr_code_image_base64,
        transactionId,
      } = (await res.json()) as PixResponse;
      setTransactionId(transactionId);
      if (!res.ok)
        throw new Error(
          'Erro ao criar cobrança PIX'
        );
      setPix({
        qr_code_copy_paste,
        qr_code_image_base64,
      });
    } catch (error) {
      console.error(
        'Erro ao criar cobrança PIX:',
        error
      );
      toast.error('Erro ao criar cobrança PIX');
    } finally {
      setLoading(false);
    }
  };

  // Função criada para simular o dispatch no gateway
  const paidPix = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_MOCK_GATEWAY_URL
        }/paid/${transactionId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      if (data.status === 'success') {
        toast.success(
          'Pagamento simulado com sucesso! '
        );
      }
    } catch {
      toast.error(
        'Erro ao efetuar pagamento do PIX'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (pix?.qr_code_copy_paste) {
      await navigator.clipboard.writeText(
        pix.qr_code_copy_paste
      );
      toast.success('Chave PIX copiada!');
    }
  };

  return (
    <div className="pix-container">
      <h1>Pagar com PIX</h1>
      {!pix && (
        <button
          className="button_primary"
          onClick={handlePix}
          disabled={loading}
        >
          {loading
            ? 'Gerando PIX...'
            : 'Pagar com PIX'}
        </button>
      )}

      {pix && (
        <div className="pix-result">
          <img
            src={pix.qr_code_image_base64}
            alt="QR Code PIX"
            className="pix-qr"
          />
          <p>
            <strong>Copia e Cola:</strong>
            <br />
            <span className="pix-copy">
              {pix.qr_code_copy_paste}
            </span>
            <button
              className=" button_primary pix-copy-btn"
              onClick={handleCopy}
              style={{ marginLeft: 8 }}
            >
              Copiar
            </button>
          </p>
        </div>
      )}

      {pix && (
        <button
          className="button_primary"
          onClick={paidPix}
          disabled={loading}
        >
          Simular Pagamento
        </button>
      )}
    </div>
  );
}
