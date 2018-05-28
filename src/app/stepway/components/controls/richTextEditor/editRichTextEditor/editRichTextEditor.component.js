export const EDIT_RICH_TEXT_EDITOR_COMPONENT = 'editRichTextEditorControl';

export const editRichTextEditorControlComponent = {
  template: `
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h5 class="greyText">
              <i class="fa fa-eye"></i>
              &nbsp;
              {{'PREVIEW_TAB' | translate}} :
            </h5>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label
                for="RichTextEditor"
                class="control-label textControlLabel">
                {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
                <span
                  ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  class="textControlLabel">
                  *
                </span>
              </label>
              <div class="">
                <text-angular
                  ng-model="$ctrl.model[options.key]">
                </text-angular>
                <p class="help-block">
                  {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h5 class="greyText">
              <i class="fa fa-pencil-square-o"></i>
              &nbsp;
              {{'EDIT_PROPERTIES' | translate}} :
            </h5>
          </div>
        </div>
        <hr/>
    <!-- required can't be applied to rich text editor (textAngular) right now -->
    <!--<div class="row">
          <div class="form-group">
            <label
              for="inputTextRequiredUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">Required :
            </label>
            <div class="col-lg-9">
              <div class="checkboxCssCorrection">
                &nbsp;
              </div>
              <input
                type="checkbox"
                ng-model="nyaSelect.temporyConfig.formlyRequired" id="inputTextRequiredUpdate">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>-->
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextDescriptionUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              {{'DESCRIPTION' | translate}} :
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
                id="inputTextDescriptionUpdate"
                placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  bindings: {
    nyaSelect: '='
  },
  controller:
  class editRichTextEditorControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};

const editRichTextEditorModuleName = 'stepway.editRichTextEditor.module';
export default angular
                .module(editRichTextEditorModuleName, [])
                .component(EDIT_RICH_TEXT_EDITOR_COMPONENT, editRichTextEditorControlComponent);
