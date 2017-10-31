import React from 'react';
import { render } from 'react-dom';
import ContentPreview from 'box-ui-elements/lib/components/ContentPreview';
import messages from 'box-ui-elements/lib/i18n/en-US';
import 'box-ui-elements/dist/explorer.css';
import './index.scss';

const FILE_ID_DOC = '93392244621';
const FILE_ID_VIDEO = '101504801571';
const FILE_ID_3D = '101532838591';
const FILE_ID_TEXT = '101524518971';
const FILE_ID_EXCEL = '173493670106';

const container = document.querySelector('.container');
const token = 'EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP';

const getLocalizedMessage = (id, replacements) =>
    messages[id].replace(/{\s*(\w+)\s*}/g, (match, key) => replacements[key]);


render(
    <ContentPreview
        fileId={FILE_ID_DOC}
        token={token}
        getLocalizedMessage={getLocalizedMessage}
        collection={[FILE_ID_DOC, FILE_ID_EXCEL, FILE_ID_VIDEO, FILE_ID_3D, FILE_ID_TEXT]}
    />,
    container
);
