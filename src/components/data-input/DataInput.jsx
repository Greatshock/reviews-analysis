import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Typography, Button } from 'antd';
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import './DataInput.less';

const { Dragger } = Upload;
const { Title } = Typography;

const DataInput = () => {
    const [canProceed, setCanProceed] = useState(false);
    const [fileList, setFileList] = useState([]);

    const clearFiles = () => setFileList([]);
    const onFileChange = ({ file, fileList }) => {
        const { status } = file;

        if (status !== 'uploading') {
            console.log(file, fileList);
        }

        if (status === 'done') {
            message.success(`${file.name} file uploaded successfully.`);
            setCanProceed(true);
            setFileList([fileList[fileList.length - 1]]);
        } else if (status === 'error') {
            message.error(`${file.name} file upload failed.`);
            setCanProceed(false);
            setFileList([]);
        }
    };

    return (
        <div className='data-input'>
            <Title style={{ color: '#fff', textAlign: 'center' }} level={2}>
                Upload File with Customer Reviews
            </Title>
            <div className='data-input__stripe'>
                <div className='data-input__upload-area'>
                    <Dragger
                        name='reviews'
                        multiple={false}
                        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                        accept='.txt,.csv,.xls,.xlsx'
                        fileList={fileList}
                        onChange={onFileChange}
                        onRemove={clearFiles}
                    >
                        <p className='ant-upload-drag-icon'>
                            <InboxOutlined />
                        </p>
                        <p className='ant-upload-text'>
                            Click or drag file to this area to upload
                        </p>
                        <p className='ant-upload-hint'>
                            Supports only single file upload. Avoid exposing
                            your customer personal or company private data.
                        </p>
                    </Dragger>
                </div>

                <Link to='/results'>
                    <Button
                        type='primary'
                        size='large'
                        shape='round'
                        disabled={!canProceed}
                    >
                        Proceed
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default memo(DataInput);
