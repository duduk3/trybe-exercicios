import React from "react";

class PersonalData extends React.Component {
    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            cidade: '',
            estado: '',
            tipo: '',
            personal: {},
        }

        this.getUpperCase = this.getUpperCase.bind(this);
        this.getOnBlur = this.getOnBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getUpperCase(event) {
        this.setState({nome: event.target.value});
        console.log(this.state.nome);
    }
    
    getOnBlur(event) {
        event.target.style.color = 'yellow';
    }
    
    handleChange({ target }) {
        const { name, value } = target;
        this.setState.name({[name]: value})
    }

    render() {
        const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
        const { state: { nome, email, cpf, cidade, estado }, handleChange, getUpperCase} = this;
        return (
            <fieldset className="person-content">
                <div>
                    <label>Nome</label>
                    <input 
                        type='text'
                        name='nome'
                        value={() => getUpperCase(nome)}
                        maxLength='40' 
                        onChange={handleChange} 
                        required>
                    </input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        maxLength='50' 
                        onChange={handleChange} 
                        required>
                    </input>
                </div>
                <div>
                    <label>CPF</label>
                    <input
                        type='text'
                        name='cpf'
                        value={cpf}
                        maxLength='11'
                        onChange={handleChange} 
                        required>
                    </input>
                </div>
                <div>
                    <label>Cidade</label>
                    <input
                        type='text'
                        name='cidade'
                        value={cidade}
                        maxLength='28'
                        onBlur={this.getOnBlur}
                        onChange={handleChange} 
                        required>
                    </input>
                </div>
                <div>
                    <label for='estados'>Estado</label>
                    <select
                        name='estado'
                        value={estado}
                        onChange={handleChange} 
                        required
                    >
                        {estados.sort().map((sigla) => <option value={sigla}>{sigla}</option>)}
                    </select>
                </div>
                <div className="radio-content">
                    <input
                        type="radio"
                        name="tipo"
                        id="casa"
                        value="casa">
                    </input>
                    <label for="casa">Casa</label>            
                </div>
                <div className="radio-content">
                    <input
                        type="radio"
                        name="tipo"
                        id="apto"
                        value="apto">
                    </input>
                    <label for="apto">Apartamento</label>
                </div>
            </fieldset>
        )
    }
}

export default PersonalData;