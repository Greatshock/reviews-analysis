import './Results.less';
import { Progress, Skeleton, Typography } from 'antd';
import React, { memo, useEffect, useState } from 'react';

const { Text } = Typography;

const Results = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            setTimeout(() => {
                setProgress(
                    (progress) =>
                        progress + Math.round((Math.random() + 0.1) * 10)
                );
            }, 500);
        }
    }, [progress]);

    if (progress >= 100) {
        return <div className='results'>Results</div>;
    }

    return (
        <div className='results'>
            <Text>Reviews Analysis Results</Text>
            <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                status={progress < 100 ? 'active' : 'success'}
                percent={progress}
            />
            <Skeleton
                loading={progress < 100}
                active
                round
                paragraph={{
                    rows: 20,
                }}
            />
        </div>
    );
};

export default memo(Results);
