import React from 'react';
import { NextPage } from 'next';
import NextErrorPage from 'next/error';

const Custom404Page: NextPage = () => <NextErrorPage statusCode={404} />;

export default Custom404Page;
