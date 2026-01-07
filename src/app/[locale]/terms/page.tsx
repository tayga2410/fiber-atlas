import React from 'react';
import { Section } from '@/components/ui/Section';

export default function TermsPage() {
    return (
        <Section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">Условия использования</h1>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        Используя сервис Fiber Atlas, вы соглашаетесь с данными условиями. Пожалуйста, внимательно ознакомьтесь с ними.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">1. Предоставление услуг</h2>
                    <p>
                        Fiber Atlas предоставляет доступ к облачной GIS-системе для учета инфраструктуры связи. Доступ предоставляется на условиях подписки.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">2. Обязанности пользователя</h2>
                    <p>
                        Пользователь обязуется:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Предоставлять достоверную информацию при регистрации;</li>
                        <li>Не использовать сервис для незаконных целей;</li>
                        <li>Обеспечивать конфиденциальность своих учетных данных.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8">3. Ограничение ответственности</h2>
                    <p>
                        Мы стремимся обеспечить бесперебойную работу сервиса, однако Fiber Atlas не несет ответственности за временные перебои в работе, вызванные техническими причинами или действиями третьих лиц.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">4. Интеллектуальная собственность</h2>
                    <p>
                        Все права на программное обеспечение Fiber Atlas принадлежат разработчикам. Пользователю предоставляется право использования системы без права копирования или модификации исходного кода.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">5. Расторжение соглашения</h2>
                    <p>
                        Мы оставляем за собой право приостановить доступ к сервису в случае нарушения данных условий или при прекращении оплаты подписки.
                    </p>
                </div>
            </div>
        </Section>
    );
}
