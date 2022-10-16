import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub} from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
    return (
        <Container>
            <Content>
                <ItemContact
                    IconFa={FaLinkedin}
                    LinkContact="https://www.linkedin.com/in/luiz-silva-b61a34251/"
                />
                <ItemContact
                    IconFa={FaInstagram}
                    LinkContact="https://www.instagram.com/shaversh1an/"
                />
                <ItemContact
                    IconFa={FaGithub}
                    LinkContact="https://github.com/Shaversh1an"
                />
                <ItemContact
                    IconFa={FaEnvelope}
                    LinkContact="jiseloo52@gmail.com"
                />
            </Content>
        </Container>
    )
}