package com.pechakuchas2.core.models;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

import lombok.Getter;
import lombok.Setter;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ComponentExporter.class }, resourceType = HeaderModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderModel implements ComponentExporter, HeaderInterface {
    protected static final String RESOURCE_TYPE = "pechakuchas2-react/components/header";

    @ValueMapValue
    @Getter
    protected String headerTitle;

    @ValueMapValue
    @Getter
    protected String fileReference;

    @ChildResource(name = "linksList")
    @Getter
    @Setter
    public List<HeaderLink> linksList;

    @ChildResource(name = "buttonsList")
    @Getter
    @Setter
    public List<HeaderLink> buttonsList;

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
