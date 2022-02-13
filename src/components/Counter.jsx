import {useState} from 'react';
export function Counter(options) {
    const { initialValue = 0, onChange = () => {} } = options;
    const [value, setValue] = useState(initialValue);

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1);
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onChange(value)}>Salvar</button>
        </div>
    );

}
