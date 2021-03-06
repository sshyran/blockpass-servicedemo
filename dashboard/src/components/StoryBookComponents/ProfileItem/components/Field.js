import React from 'react';
import { Col } from 'antd';
import { TextItem, ImageItem } from '../../InformationItem';

const Field = ({ type, dataValue, status }) => (
	<Col span="16" className="profile-item__content">
		{type === 'image' ? (
			<ImageItem data={dataValue} status={status} />
		) : (
			<TextItem data={dataValue} status={status} />
		)}
	</Col>
);

export default Field;
