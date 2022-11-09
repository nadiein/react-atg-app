import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import OptionsFormControl from './OptionsFormControl';


describe('Select form control should be rendered', () => {
    it('renders and return container', () => {
        const { container } = render(<OptionsFormControl />);
        expect(container).toBeDefined();
    });
    it('renders a select element', () => {
        const { container } = render(<OptionsFormControl />);
        expect(container).toContainHTML('select');
    });
});
