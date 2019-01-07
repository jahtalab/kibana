/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import mockAnnotations from '../../../components/annotations_table/__mocks__/mock_annotations.json';

import { shallow } from 'enzyme';
import moment from 'moment-timezone';
import React from 'react';

import { AnnotationDescriptionList } from './index';

describe('AnnotationDescriptionList', () => {
  beforeEach(() => {
    moment.tz.setDefault('UTC');
  });
  afterEach(() => {
    moment.tz.setDefault('Browser');
  });

  test('Initialization with annotation.', () => {
    const wrapper = shallow(<AnnotationDescriptionList annotation={mockAnnotations[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});