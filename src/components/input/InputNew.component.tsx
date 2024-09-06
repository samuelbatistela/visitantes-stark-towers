import React, { FC, ChangeEvent, MouseEvent } from "react";
import { Label as SharedLabel } from "@/components/typography/Typography.component";
import styled from "styled-components";

interface StyledInputProps {
  error: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 48px;
  padding: 18px;
  font-size: ${({ theme }) => theme.font.size.medium}px;
  line-height: 36px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  color: ${({ theme }) => theme.components.input.color};
  background-color: ${({ theme }) => theme.components.input.backgroundColor};
  border: solid 1px ${({ theme }) => theme.components.input.borderColor};
  border-radius: ${({ theme }) => theme.border.radius};

  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.components.input.focusBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.components.input.placeholderColor};
  }
`;

const Container = styled.div`
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled(SharedLabel)``;

const ErrorText = styled.div`
  color: ${({ theme }) => theme.color.negativePure};
  font-size: ${({ theme }) => theme.font.size.small}px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  line-height: 18px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const ButtonAlert = styled.button`
  position: relative;
  margin-left: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.negativePure};
  color: ${({ theme }) => theme.color.negativePure};
`;

type InputProps = {
  name: string;
  value: string;
  type: string;
  autoComplete: string;
  label: string;
  errorText: string;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: React.FC;
  onIconClick?: (e: MouseEvent<HTMLDivElement>) => void;
  maxLength: number;
};

const InputNew: FC<InputProps> = ({
  name,
  value,
  type,
  autoComplete,
  label,
  errorText,
  error,
  onChange,
  icon: Icon,
  onIconClick,
  maxLength,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper>
        <StyledInput
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={autoComplete}
          error={error}
          maxLength={maxLength}
        />
        {(error || Icon) && (
          <IconWrapper>
            {Icon && (
              <Wrapper onClick={onIconClick}>
                <Icon />
              </Wrapper>
            )}
            {error && <ButtonAlert type="button">!</ButtonAlert>}
          </IconWrapper>
        )}
      </Wrapper>
      {error && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default InputNew;
