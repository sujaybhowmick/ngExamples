class RestParamsMappingFilters {

    def filters = {
        all(controller:'*', action:'*') {
            before = {
                request.JSON?.each {key, val ->
                    log.info "mapping param $key"
                    params."${key}" = val
                }
            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
