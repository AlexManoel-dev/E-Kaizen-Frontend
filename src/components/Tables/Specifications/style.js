import styled from 'styled-components';

export const Table = styled.table`
    width: 1000px;
    height: 60%;
    text-align: center;
    border-collapse: collapse;
    /* border: 1px solid red; */

    thead{
        background-color: var(--kombu-green);
        /* border: 1px solid red; */
    }

    th{
       text-transform: uppercase;
       font-weight: bold; 
       height: 50px;
       /* border: 1px solid red; */
    }

    tr{
        background-color: var(--hunter-green);
        &:nth-child(even) {
            background-color: var(--olive-green);
        }
        /* border: 1px solid red; */
    }

    td{
        height: 35px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* border: 1px solid red; */
    }

    ion-icon{
        font-size: 30px;
    }
`;