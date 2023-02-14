import styled from "styled-components";

export const WindowController = styled.div`
    &.active {
        .content {
            width: 100%;
            min-height: 100vh;
        
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        
            > button {
                font-size: 2rem;
                padding: .5rem 2rem;
            }
        }
        .idle { display: none }
    }

    &:not(.active) {
        .content {
            display: none;
        }
    }
`