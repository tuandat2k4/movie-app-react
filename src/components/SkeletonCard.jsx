import styled, { keyframes} from "styled-components"
import theme from "@/styles/theme"

//độ mờ hiệu ứng ánh sáng chạy sang ngang
const shimmer = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`;
const CardContainer = styled.div`
    width: 100%;
    border-radius: 24px;
    margin-top: -50px;
    background-color: ${theme.colors.card};
`;
const SkeletonBox = styled.div`
    background-color: #2a2a40;
    animation: ${shimmer} 1.5s infinite;
`
const PosterSkeleton = styled(SkeletonBox)`
    width: 100%;
    height: 400px;
    border-radius: 30px;
    padding: 20px;

    @media (max-width: 480px) {
        height: 220px;
        padding: 12px;
    }
`;
const TitleSkeleton = styled(SkeletonBox)`
    width: 70%;
    height: 24px;
    margin: 20px 20px 10px;
    border-radius: 4px;

    @media (max-width: 480px) {
        height: 18px;
        margin-left: 12px;
    }
`
const InfoSkeleton = styled(SkeletonBox)`
  width: 50%;
  height: 16px;
  margin: 0 20px 20px;
  border-radius: 4px;

  @media (max-width: 480px) {
    height: 12px;
    margin-left: 12px;
  }
`;

const SkeletonCard = () => (
    <CardContainer>
        <PosterSkeleton />
        <TitleSkeleton />
        <InfoSkeleton />
    </CardContainer>
)

export default SkeletonCard;