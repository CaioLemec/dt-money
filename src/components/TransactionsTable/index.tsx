import React from "react";
import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$ 1.500</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Despesa</td>
                        <td className="withdraw">-R$ 500</td>
                        <td>Qualquer uma</td>
                        <td>21/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}