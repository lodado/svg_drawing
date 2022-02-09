import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '@Redux/shape/action';
import { ButtonContainer } from './style';

export default function ImageIOContainer(): JSX.Element {
  const disPatch = useDispatch();

  const fileUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.style.display = 'None';
    fileInput.type = 'file';
    fileInput.accept = '.svg';
    document.body.appendChild(fileInput);
    fileInput.click();

    const readInputFile = () => {
      const { files } = fileInput;

      if (files) {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          const svgDrawer = document.querySelector('#svgDrawer');
          disPatch(clearData());
          svgDrawer.innerHTML = event.target.result as string;
          document.body.removeChild(fileInput);
        });
        reader.readAsText(files[0]);
      }
    };

    fileInput.addEventListener('change', readInputFile);
  };

  const fileDownload = () => {
    const dataURL = document.querySelector('#svgDrawer').outerHTML;
    const svgBlob = new Blob([dataURL], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const link = document.createElement('a');
    link.style.display = 'None';
    document.body.appendChild(link);
    link.setAttribute('href', svgUrl);
    link.setAttribute('download', 'download.svg');
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ButtonContainer>
      <button onClick={fileDownload} type="button">
        save
      </button>
      <button onClick={fileUpload} type="button">
        load
      </button>
    </ButtonContainer>
  );
}
