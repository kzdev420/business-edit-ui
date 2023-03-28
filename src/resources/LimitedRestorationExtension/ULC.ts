import { NameChangeOptions, FilingCodes } from '@/enums/'
import { CorpTypeCd, GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module/'
import { ResourceIF } from '@/interfaces/'

export const UlcRestorationResource: ResourceIF = {
  entityReference: 'Company',
  contactLabel: 'Registered Office',
  displayName: GetCorpFullDescription(CorpTypeCd.BC_ULC_COMPANY),
  addressLabel: 'Registered Office',
  showEmailUnderName: false,
  filingData: {
    entityType: CorpTypeCd.BC_ULC_COMPANY,
    filingTypeCode: FilingCodes.RESTORATION_LTD_EXTEND,
    priority: false
  },
  changeData: {
    orgPersonInfo: {
      orgPersonLabel: 'Applicant',
      orgTypesLabel: 'Business or Corporation',
      subtitle: null // not used
    }
  },
  certifyClause: 'Note: It is an offence to make a false or misleading statement in respect ' +
    'of a material fact in a record submitted to the Corporate Registry for filing. ' +
    'See section 427 of the Business Corporations Act.'
}