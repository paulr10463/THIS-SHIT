package com.pechakuchas2.core.models;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

import lombok.Getter;
import lombok.Setter;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = SOLIDCardsComponent.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SOLIDCardsComponent implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "pechakucha2-react/components/solidcardscomponent";

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String fileReference;

    
    @Inject
    @ChildResource(name = "multipleCardsList")
    @Getter
    @Setter
    public List<MultipleCardsItemModel> multipleCardsList;


    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
