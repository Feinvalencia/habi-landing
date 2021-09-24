import React from 'react';

import { useStep } from '@/global/hooks/step';
import { useForm } from '@/global/hooks/form';

import DynamicForm from '@/components/utils/dynamic-form';

import schema from './schema';
import FormSummary from '@/components/molecules/form-summary/form-summary.component';

const LandingForm = () => {
	const {
		step,
		displayStep,
		remainingSteps,
		isFirstStep,
		isLastStep,
		handleNextStep,
		handlePrevStep,
	} = useStep(schema.steps.length);
	const { values, cleanForm } = useForm();
	return (
		<div className="containerHome">
			<div className="container">
				<div className="controls">
					<DynamicForm steps={schema.steps} step={step} />
					<div className="one">

						<div className="boxsteps">
							<h4>Paso: {displayStep} </h4> 
							<h4>Pasos restantes: {remainingSteps}</h4> 
						</div>
						<div className="boxbuttons">
							<button id="button" onClick={handlePrevStep} disabled={isFirstStep}>
								Anterior
								<button class="ring one"></button>
								<button class="ring two"></button>
								<button class="ring three"></button>
								<button class="ring four"></button>
							</button>
						</div>
						<div className="boxbuttons">
							<div id="button" onClick={cleanForm}>
								Limpiar
								<div class="ring one"></div>
								<div class="ring two"></div>
								<div class="ring three"></div>
								<div class="ring four"></div>
							</div>
						</div>
						<div className="boxbuttons">
							<button id="button" onClick={handleNextStep} disabled={isLastStep}>
								Siguiente
								<div class="ring one"></div>
								<div class="ring two"></div>
								<div class="ring three"></div>
								<div class="ring four"></div>
							</button>
						</div>

					</div>
					<div className="description">
						<h3>Descripción</h3>
						<hr/>
						<h3>{schema.steps[step].name}</h3>
						{schema.steps[step].description}
					</div>
				</div>
				<div className="resume">
					<div >
						<h2>Resumen</h2>
						<hr/>
						<FormSummary labels={schema.labels} values={values} />
					</div>


				</div>
			</div>
		</div>
	);
};

export default LandingForm;
