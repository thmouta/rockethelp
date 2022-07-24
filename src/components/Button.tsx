import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string; //permite que cada botão tenha um title diferente
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            bg="green.700"
            h={14}
            fontSize="sm"
            rounded="sm"
            _pressed={{ bg: "green.500" }}
            {...rest}
        >
            <Heading color="white" fontSize="sm">
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}