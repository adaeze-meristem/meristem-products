import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { Modal } from '../modal';
import { toPng } from 'html-to-image';

const ProductCards = ({ color, bgColor, value, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const qrCodeRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDownload = async () => {
    try {
      if (qrCodeRef.current) {
        const dataUrl = await toPng(qrCodeRef.current);
        const link = document.createElement('a');
        link.download = `${title.split(' ')[0]}-code.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Failed to download QR code', error);
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className={`w-80 sm:w-96 md:w-[424px] p-6 rounded-md min-h-40 grid grid-cols-[120px_1fr] gap-4 items-center`}
        onClick={openModal}
      >
        <div className="p-3 relative">
          <QRCode
            size={107}
            bgColor="transparent"
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={value}
            viewBox={`0 0 107 107`}
          />
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 rounded-tl-[4px] border-black"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 rounded-tr-[4px] border-black"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 rounded-bl-[4px] border-black"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 rounded-br-[4px] border-black"></div>
        </div>
        <h2 className="text-base font-semibold">{title}</h2>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={closeModal}>
          <div className="mx-auto max-w-64 text-center">
            <h3 className="mb-4 font-semibold text-xl">{title}</h3>
            <div
              ref={qrCodeRef}
              className="p-1 border rounded-md inline-block bg-white"
            >
              <QRCode
                size={260}
                bgColor="transparent"
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={value}
                viewBox={`0 0 260 260`}
              />
            </div>
            <p className="text-sm font-normal text-black/80 my-4">
              Scan this code with your phone to open the link
            </p>
            <button
              style={{ backgroundColor: color }}
              className={`w-full flex justify-center items-center text-white text-sm font-bold py-4 rounded-md`}
              onClick={handleDownload}
            >
              Download QR code
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export { ProductCards };
