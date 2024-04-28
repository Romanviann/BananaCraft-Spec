import Table from 'react-bootstrap/Table';

interface SpecTableProps {
    columns: string[];
    rowTitles: string[];
    rows: string[][];
}

function SpecTable({columns, rowTitles, rows}: SpecTableProps) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th></th>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td>{rowTitles[rowIndex]}</td>
                    {row.map((value, valueIndex) => (
                        <td key={valueIndex}>{value ? value : 'N/A'}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default SpecTable;