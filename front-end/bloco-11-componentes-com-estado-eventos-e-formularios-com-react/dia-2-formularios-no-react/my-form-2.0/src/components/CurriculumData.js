import React from "react";

class CurriculumData extends React.Component {
    constructor() {
        super()

        this.state = {
            resume: '',
            cargo: '',
            descricao: '',
            curriculum: {},
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({[name]: value});
    }

    render() {
        const {state: {resume, cargo, descricao}, handleChange} = this;
        return (
            <fieldset className="cv-content">
                <div>
                    <label>Resumo do Currículo</label>
                    <textarea
                        name="resume"
                        id="curriculo"
                        cols="30"
                        rows="10"
                        maxlength="1000"
                        value={resume}
                        onChange={handleChange}
                        required
                    >
                    </textarea>
                </div>
                
                <div>
                    <label>Cargo</label>
                    <textarea
                        name="cargo"
                        id="cargo"
                        onMouseEnter={() => (alert('Preencha com cuidado esta informação.'))}
                        maxlength="40"
                        value={cargo}
                        onChange={handleChange}
                        required
                    >
                    </textarea>
                </div>
                
                <div>
                    <label>Descrição do cargo</label>
                    <input
                        type="text"
                        name="descricao"
                        id="descricao"
                        maxlength="500"
                        value={descricao}
                        onChange={handleChange}
                        required
                    >
                    </input>
                </div>
                               
                <button value="Enviar" id="btnSend">Enviar</button>
            </fieldset>
        )
    }
}

export default CurriculumData;