import { Button, Carousel, Col, Rate, Steps, Typography } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Home.less';

const { Step } = Steps;

const reviews = [
    {
        name: 'Alex Sanchez',
        company: 'Wayne Industries',
        content: 'Now we know what our customers want!',
        rate: 5,
    },
    {
        name: 'Carol Denvers',
        company: 'Interscope',
        content: 'Cool service. Thank you guys!',
        rate: 4.5,
    },
    {
        name: 'Marshall Mathers',
        company: 'Shady Records',
        content: 'Really boosted up my business 🚀',
        rate: 5,
    },
];

const Home = () => {
    return (
        <Col align='center' style={{ padding: '24px 0', height: '100%' }}>
            <Typography.Title style={{ color: '#fff', margin: 40 }}>
                Customer Reviews Analysis Service
            </Typography.Title>
            <Typography.Paragraph
                style={{
                    margin: '40px 40px 20px',
                    padding: '0 40px',
                    maxWidth: 940,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 300,
                }}
            >
                Improve your company performance by taking control over customer
                reviews. The service will analyze them automatically and
                highlight key advantages and disadvantages accordion to your
                customers.
            </Typography.Paragraph>

            <Link to='/data-entry'>
                <Button
                    className='home__button _try'
                    type='primary'
                    size='large'
                    shape='round'
                >
                    Try Now
                </Button>
            </Link>

            <div style={{ padding: '40px 40px 8px', background: '#fff' }}>
                <Typography.Title
                    level={2}
                    style={{ color: 'rgb(15, 169, 119)' }}
                >
                    How it Works
                </Typography.Title>
                <Steps style={{ margin: '32px 0' }}>
                    <Step
                        title='Upload Reviews'
                        status='process'
                        description='Text format supported.'
                    />
                    <Step
                        title='View Results'
                        status='process'
                        description='Study the analytics.'
                    />
                    <Step
                        title='Study a Specific Review'
                        status='process'
                        description='Choose the review you want to study more precisely.'
                    />
                </Steps>
            </div>

            <div style={{ maxWidth: 400, margin: '56px 0 32px' }}>
                <Carousel autoplay dots={false}>
                    {reviews.map((review, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ borderRadius: '50%' }}
                                    width={100}
                                    height={100}
                                    src={`https://i.pravatar.cc/100?img=${i}`}
                                    alt={review.name}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        marginLeft: 16,
                                    }}
                                >
                                    <Typography.Title
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 8,
                                        }}
                                        level={4}
                                    >
                                        {review.name}
                                    </Typography.Title>

                                    <Rate
                                        disabled
                                        allowHalf
                                        defaultValue={review.rate}
                                    />

                                    <Typography.Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginTop: 8,
                                        }}
                                    >
                                        <Typography.Text
                                            style={{ fontSize: 16 }}
                                        >
                                            {review.content}
                                        </Typography.Text>
                                    </Typography.Paragraph>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </Col>
    );
};

Home.displayName = 'Home';

export default memo(Home);
