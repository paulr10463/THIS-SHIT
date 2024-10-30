package com.pechakuchas2.core.models;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

import lombok.Getter;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ComponentExporter.class }, resourceType = MultipleCardsModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MultipleCardsModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "pechakuchas2-react/components/multiplecardscomponent";

    @ValueMapValue
    @Getter
    protected String fileReference;

    @ChildResource(name = "multipleCardsList")
    @Getter
    public List<MultipleCardsItemModel> multipleCardsList;

    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}
